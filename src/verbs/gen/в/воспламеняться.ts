import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспламеняться: PerfectVerb = {
  name: Word('воспламеняться', 9),
  singular1stPerson: Word('воспламеняюсь', 9),
  singular2ndPerson: Word('воспламеняешься', 9),
  singular3rdPerson: Word('воспламеняется', 9),
  plural1stPerson: Word('воспламеняемся', 9),
  plural2ndPerson: Word('воспламеняетесь', 9),
  plural3rdPerson: Word('воспламеняются', 9),
  masculinePast: Word('воспламенялся', 9),
  femininePast: Word('воспламенялась', 9),
  neuterPast: Word('воспламенялось', 9),
  pluralPast: Word('воспламенялись', 9),
  imperativeInformal: Word('воспламеняйся', 9),
  imperativeFormal: Word('воспламеняйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(воспламеняться.name.text, воспламеняться);

export { воспламеняться };