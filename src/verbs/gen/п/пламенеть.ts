import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пламенеть: PerfectVerb = {
  name: Word('пламенеть', 6),
  singular1stPerson: Word('пламенею', 6),
  singular2ndPerson: Word('пламенеешь', 6),
  singular3rdPerson: Word('пламенеет', 6),
  plural1stPerson: Word('пламенеем', 6),
  plural2ndPerson: Word('пламенеете', 6),
  plural3rdPerson: Word('пламенеют', 6),
  masculinePast: Word('пламенел', 6),
  femininePast: Word('пламенела', 6),
  neuterPast: Word('пламенело', 6),
  pluralPast: Word('пламенели', 6),
  imperativeInformal: Word('пламеней', 6),
  imperativeFormal: Word('пламенейте', 6),
  imperfect: [],
};

perfectVerbs.set(пламенеть.name.text, пламенеть);

export { пламенеть };