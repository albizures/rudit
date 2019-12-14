import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемолвиться: PerfectVerb = {
  name: Word('перемолвиться', 5),
  singular1stPerson: Word('перемолвлюсь', 5),
  singular2ndPerson: Word('перемолвишься', 5),
  singular3rdPerson: Word('перемолвится', 5),
  plural1stPerson: Word('перемолвимся', 5),
  plural2ndPerson: Word('перемолвитесь', 5),
  plural3rdPerson: Word('перемолвятся', 5),
  masculinePast: Word('перемолвился', 5),
  femininePast: Word('перемолвилась', 5),
  neuterPast: Word('перемолвилось', 5),
  pluralPast: Word('перемолвились', 5),
  imperativeInformal: Word('перемолвись', 5),
  imperativeFormal: Word('перемолвитесь', 5),
  imperfect: [],
};

perfectVerbs.set(перемолвиться.name.text, перемолвиться);

export { перемолвиться };