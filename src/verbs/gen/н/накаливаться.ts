import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накаливаться: PerfectVerb = {
  name: Word('накаливаться', 3),
  singular1stPerson: Word('накаливаюсь', 3),
  singular2ndPerson: Word('накаливаешься', 3),
  singular3rdPerson: Word('накаливается', 3),
  plural1stPerson: Word('накаливаемся', 3),
  plural2ndPerson: Word('накаливаетесь', 3),
  plural3rdPerson: Word('накаливаются', 3),
  masculinePast: Word('накаливался', 3),
  femininePast: Word('накаливалась', 3),
  neuterPast: Word('накаливалось', 3),
  pluralPast: Word('накаливались', 3),
  imperativeInformal: Word('накаливайся', 3),
  imperativeFormal: Word('накаливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(накаливаться.name.text, накаливаться);

export { накаливаться };