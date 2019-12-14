import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнемочь: PerfectVerb = {
  name: Word('изнемочь', 5),
  singular1stPerson: Word('изнемогу', 7),
  singular2ndPerson: Word('изнеможешь', 5),
  singular3rdPerson: Word('изнеможет', 5),
  plural1stPerson: Word('изнеможем', 5),
  plural2ndPerson: Word('изнеможете', 5),
  plural3rdPerson: Word('изнемогут', 5),
  masculinePast: Word('изнемог', 5),
  femininePast: Word('изнемогла', 8),
  neuterPast: Word('изнемогло', 8),
  pluralPast: Word('изнемогли', 8),
  imperativeInformal: Word('изнемоги', 7),
  imperativeFormal: Word('изнемогите', 7),
  imperfect: [],
};

perfectVerbs.set(изнемочь.name.text, изнемочь);

export { изнемочь };