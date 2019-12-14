import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ветвиться: PerfectVerb = {
  name: Word('ветвиться', 4),
  singular1stPerson: Word('ветвлюсь', 5),
  singular2ndPerson: Word('ветвишься', 4),
  singular3rdPerson: Word('ветвится', 4),
  plural1stPerson: Word('ветвимся', 4),
  plural2ndPerson: Word('ветвитесь', 4),
  plural3rdPerson: Word('ветвятся', 4),
  masculinePast: Word('ветвился', 4),
  femininePast: Word('ветвилась', 4),
  neuterPast: Word('ветвилось', 4),
  pluralPast: Word('ветвились', 4),
  imperativeInformal: Word('ветвись', 4),
  imperativeFormal: Word('ветвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ветвиться.name.text, ветвиться);

export { ветвиться };