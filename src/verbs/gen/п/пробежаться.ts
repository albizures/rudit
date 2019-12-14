import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробежаться: PerfectVerb = {
  name: Word('пробежаться', 6),
  singular1stPerson: Word('пробегусь', 6),
  singular2ndPerson: Word('пробежишься', 6),
  singular3rdPerson: Word('пробежится', 6),
  plural1stPerson: Word('пробежимся', 6),
  plural2ndPerson: Word('пробежитесь', 6),
  plural3rdPerson: Word('-ут', 1),
  masculinePast: Word('пробежался', 6),
  femininePast: Word('пробежалась', 6),
  neuterPast: Word('пробежалось', 6),
  pluralPast: Word('пробежались', 6),
  imperativeInformal: Word('пробегись', 6),
  imperativeFormal: Word('пробегитесь', 6),
  imperfect: [],
};

perfectVerbs.set(пробежаться.name.text, пробежаться);

export { пробежаться };