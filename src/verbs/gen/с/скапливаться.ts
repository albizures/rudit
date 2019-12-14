import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скапливаться: PerfectVerb = {
  name: Word('скапливаться', 2),
  singular1stPerson: Word('скапливаюсь', 2),
  singular2ndPerson: Word('скапливаешься', 2),
  singular3rdPerson: Word('скапливается', 2),
  plural1stPerson: Word('скапливаемся', 2),
  plural2ndPerson: Word('скапливаетесь', 2),
  plural3rdPerson: Word('скапливаются', 2),
  masculinePast: Word('скапливался', 2),
  femininePast: Word('скапливалась', 2),
  neuterPast: Word('скапливалось', 2),
  pluralPast: Word('скапливались', 2),
  imperativeInformal: Word('скапливайся', 2),
  imperativeFormal: Word('скапливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(скапливаться.name.text, скапливаться);

export { скапливаться };