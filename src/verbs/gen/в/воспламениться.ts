import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспламениться: PerfectVerb = {
  name: Word('воспламениться', 9),
  singular1stPerson: Word('воспламенюсь', 9),
  singular2ndPerson: Word('воспламенишься', 9),
  singular3rdPerson: Word('воспламенится', 9),
  plural1stPerson: Word('воспламенимся', 9),
  plural2ndPerson: Word('воспламенитесь', 9),
  plural3rdPerson: Word('воспламенятся', 9),
  masculinePast: Word('воспламенился', 9),
  femininePast: Word('воспламенилась', 9),
  neuterPast: Word('воспламенилось', 9),
  pluralPast: Word('воспламенились', 9),
  imperativeInformal: Word('воспламенись', 9),
  imperativeFormal: Word('воспламенитесь', 9),
  imperfect: [],
};

perfectVerbs.set(воспламениться.name.text, воспламениться);

export { воспламениться };