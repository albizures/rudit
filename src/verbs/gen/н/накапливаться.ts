import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накапливаться: PerfectVerb = {
  name: Word('накапливаться', 3),
  singular1stPerson: Word('накапливаюсь', 3),
  singular2ndPerson: Word('накапливаешься', 3),
  singular3rdPerson: Word('накапливается', 3),
  plural1stPerson: Word('накапливаемся', 3),
  plural2ndPerson: Word('накапливаетесь', 3),
  plural3rdPerson: Word('накапливаются', 3),
  masculinePast: Word('накапливался', 3),
  femininePast: Word('накапливалась', 3),
  neuterPast: Word('накапливалось', 3),
  pluralPast: Word('накапливались', 3),
  imperativeInformal: Word('накапливайся', 3),
  imperativeFormal: Word('накапливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(накапливаться.name.text, накапливаться);

export { накапливаться };