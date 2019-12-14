import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торговаться: PerfectVerb = {
  name: Word('торговаться', 6),
  singular1stPerson: Word('торгуюсь', 4),
  singular2ndPerson: Word('торгуешься', 4),
  singular3rdPerson: Word('торгуется', 4),
  plural1stPerson: Word('торгуемся', 4),
  plural2ndPerson: Word('торгуетесь', 4),
  plural3rdPerson: Word('торгуются', 4),
  masculinePast: Word('торговался', 6),
  femininePast: Word('торговалась', 6),
  neuterPast: Word('торговалось', 6),
  pluralPast: Word('торговались', 6),
  imperativeInformal: Word('торгуйся', 4),
  imperativeFormal: Word('торгуйтесь', 4),
  imperfect: ['сторговаться'],
};

perfectVerbs.set(торговаться.name.text, торговаться);

export { торговаться };