import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропылиться: PerfectVerb = {
  name: Word('пропылиться', 6),
  singular1stPerson: Word('пропылюсь', 6),
  singular2ndPerson: Word('пропылишься', 6),
  singular3rdPerson: Word('пропылится', 6),
  plural1stPerson: Word('пропылимся', 6),
  plural2ndPerson: Word('пропылитесь', 6),
  plural3rdPerson: Word('пропылятся', 6),
  masculinePast: Word('пропылился', 6),
  femininePast: Word('пропылилась', 6),
  neuterPast: Word('пропылилось', 6),
  pluralPast: Word('пропылились', 6),
  imperativeInformal: Word('пропылись', 6),
  imperativeFormal: Word('пропылитесь', 6),
  imperfect: [],
};

perfectVerbs.set(пропылиться.name.text, пропылиться);

export { пропылиться };