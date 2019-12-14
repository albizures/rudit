import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превозмочь: PerfectVerb = {
  name: Word('превозмочь', 7),
  singular1stPerson: Word('превозмогу', 9),
  singular2ndPerson: Word('превозможешь', 7),
  singular3rdPerson: Word('превозможет', 7),
  plural1stPerson: Word('превозможем', 7),
  plural2ndPerson: Word('превозможете', 7),
  plural3rdPerson: Word('превозмогут', 7),
  masculinePast: Word('превозмог', 7),
  femininePast: Word('превозмогла', 10),
  neuterPast: Word('превозмогло', 10),
  pluralPast: Word('превозмогли', 10),
  imperativeInformal: Word('превозмоги', 9),
  imperativeFormal: Word('превозмогите', 9),
  imperfect: [],
};

perfectVerbs.set(превозмочь.name.text, превозмочь);

export { превозмочь };