import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проваливаться: PerfectVerb = {
  name: Word('проваливаться', 4),
  singular1stPerson: Word('проваливаюсь', 4),
  singular2ndPerson: Word('проваливаешься', 4),
  singular3rdPerson: Word('проваливается', 4),
  plural1stPerson: Word('проваливаемся', 4),
  plural2ndPerson: Word('проваливаетесь', 4),
  plural3rdPerson: Word('проваливаются', 4),
  masculinePast: Word('проваливался', 4),
  femininePast: Word('проваливалась', 4),
  neuterPast: Word('проваливалось', 4),
  pluralPast: Word('проваливались', 4),
  imperativeInformal: Word('проваливайся', 4),
  imperativeFormal: Word('проваливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(проваливаться.name.text, проваливаться);

export { проваливаться };