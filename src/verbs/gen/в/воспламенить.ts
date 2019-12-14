import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспламенить: PerfectVerb = {
  name: Word('воспламенить', 9),
  singular1stPerson: Word('воспламеню', 9),
  singular2ndPerson: Word('воспламенишь', 9),
  singular3rdPerson: Word('воспламенит', 9),
  plural1stPerson: Word('воспламеним', 9),
  plural2ndPerson: Word('воспламените', 9),
  plural3rdPerson: Word('воспламенят', 9),
  masculinePast: Word('воспламенил', 9),
  femininePast: Word('воспламенила', 9),
  neuterPast: Word('воспламенило', 9),
  pluralPast: Word('воспламенили', 9),
  imperativeInformal: Word('воспламени', 9),
  imperativeFormal: Word('воспламените', 9),
  imperfect: [],
};

perfectVerbs.set(воспламенить.name.text, воспламенить);

export { воспламенить };