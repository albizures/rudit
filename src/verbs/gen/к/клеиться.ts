import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клеиться: PerfectVerb = {
  name: Word('клеиться', 2),
  singular1stPerson: Word('клеюсь', 2),
  singular2ndPerson: Word('клеишься', 2),
  singular3rdPerson: Word('клеится', 2),
  plural1stPerson: Word('клеимся', 2),
  plural2ndPerson: Word('клеитесь', 2),
  plural3rdPerson: Word('клеятся', 2),
  masculinePast: Word('клеился', 2),
  femininePast: Word('клеилась', 2),
  neuterPast: Word('клеилось', 2),
  pluralPast: Word('клеились', 2),
  imperativeInformal: Word('клейся', 2),
  imperativeFormal: Word('клейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(клеиться.name.text, клеиться);

export { клеиться };