import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролечь: PerfectVerb = {
  name: Word('пролечь', 4),
  singular1stPerson: Word('пролягу', 4),
  singular2ndPerson: Word('проляжешь', 4),
  singular3rdPerson: Word('проляжет', 4),
  plural1stPerson: Word('проляжем', 4),
  plural2ndPerson: Word('проляжете', 4),
  plural3rdPerson: Word('пролягут', 4),
  masculinePast: Word('пролёг', 4),
  femininePast: Word('пролегла', 7),
  neuterPast: Word('пролегло', 7),
  pluralPast: Word('пролегли', 7),
  imperativeInformal: Word('проляг', 4),
  imperativeFormal: Word('пролягте', 4),
  imperfect: [],
};

perfectVerbs.set(пролечь.name.text, пролечь);

export { пролечь };