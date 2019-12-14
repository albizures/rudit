import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкормить: PerfectVerb = {
  name: Word('подкормить', 7),
  singular1stPerson: Word('подкормлю', 8),
  singular2ndPerson: Word('подкормишь', 4),
  singular3rdPerson: Word('подкормит', 4),
  plural1stPerson: Word('подкормим', 4),
  plural2ndPerson: Word('подкормите', 4),
  plural3rdPerson: Word('подкормят', 4),
  masculinePast: Word('подкормил', 7),
  femininePast: Word('подкормила', 7),
  neuterPast: Word('подкормило', 7),
  pluralPast: Word('подкормили', 7),
  imperativeInformal: Word('подкорми', 7),
  imperativeFormal: Word('подкормите', 7),
  imperfect: [],
};

perfectVerbs.set(подкормить.name.text, подкормить);

export { подкормить };