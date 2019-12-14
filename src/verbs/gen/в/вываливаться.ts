import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вываливаться: PerfectVerb = {
  name: Word('вываливаться', 3),
  singular1stPerson: Word('вываливаюсь', 3),
  singular2ndPerson: Word('вываливаешься', 3),
  singular3rdPerson: Word('вываливается', 3),
  plural1stPerson: Word('вываливаемся', 3),
  plural2ndPerson: Word('вываливаетесь', 3),
  plural3rdPerson: Word('вываливаются', 3),
  masculinePast: Word('вываливался', 3),
  femininePast: Word('вываливалась', 3),
  neuterPast: Word('вываливалось', 3),
  pluralPast: Word('вываливались', 3),
  imperativeInformal: Word('вываливайся', 3),
  imperativeFormal: Word('вываливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вываливаться.name.text, вываливаться);

export { вываливаться };