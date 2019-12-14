import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвертеться: PerfectVerb = {
  name: Word('отвертеться', 6),
  singular1stPerson: Word('отверчусь', 6),
  singular2ndPerson: Word('отвертишься', 3),
  singular3rdPerson: Word('отвертится', 3),
  plural1stPerson: Word('отвертимся', 3),
  plural2ndPerson: Word('отвертитесь', 3),
  plural3rdPerson: Word('отвертятся', 3),
  masculinePast: Word('отвертелся', 6),
  femininePast: Word('отвертелась', 6),
  neuterPast: Word('отвертелось', 6),
  pluralPast: Word('отвертелись', 6),
  imperativeInformal: Word('отвертись', 6),
  imperativeFormal: Word('отвертитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отвертеться.name.text, отвертеться);

export { отвертеться };