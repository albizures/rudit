import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высечь: PerfectVerb = {
  name: Word('высечь', 1),
  singular1stPerson: Word('высеку', 1),
  singular2ndPerson: Word('высечешь', 1),
  singular3rdPerson: Word('высечет', 1),
  plural1stPerson: Word('высечем', 1),
  plural2ndPerson: Word('высечете', 1),
  plural3rdPerson: Word('высекут', 1),
  masculinePast: Word('высек', 1),
  femininePast: Word('высекла', 1),
  neuterPast: Word('высекло', 1),
  pluralPast: Word('высекли', 1),
  imperativeInformal: Word('высеки', 1),
  imperativeFormal: Word('высеките', 1),
  imperfect: ['высекать','сечь'],
};

perfectVerbs.set(высечь.name.text, высечь);

export { высечь };