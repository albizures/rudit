import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкрапливаться: PerfectVerb = {
  name: Word('вкрапливаться', 3),
  singular1stPerson: Word('вкрапливаюсь', 3),
  singular2ndPerson: Word('вкрапливаешься', 3),
  singular3rdPerson: Word('вкрапливается', 3),
  plural1stPerson: Word('вкрапливаемся', 3),
  plural2ndPerson: Word('вкрапливаетесь', 3),
  plural3rdPerson: Word('вкрапливаются', 3),
  masculinePast: Word('вкрапливался', 3),
  femininePast: Word('вкрапливалась', 3),
  neuterPast: Word('вкрапливалось', 3),
  pluralPast: Word('вкрапливались', 3),
  imperativeInformal: Word('вкрапливайся', 3),
  imperativeFormal: Word('вкрапливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вкрапливаться.name.text, вкрапливаться);

export { вкрапливаться };