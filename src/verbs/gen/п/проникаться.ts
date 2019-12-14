import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проникаться: PerfectVerb = {
  name: Word('проникаться', 6),
  singular1stPerson: Word('проникаюсь', 6),
  singular2ndPerson: Word('проникаешься', 6),
  singular3rdPerson: Word('проникается', 6),
  plural1stPerson: Word('проникаемся', 6),
  plural2ndPerson: Word('проникаетесь', 6),
  plural3rdPerson: Word('проникаются', 6),
  masculinePast: Word('проникался', 6),
  femininePast: Word('проникалась', 6),
  neuterPast: Word('проникалось', 6),
  pluralPast: Word('проникались', 6),
  imperativeInformal: Word('проникайся', 6),
  imperativeFormal: Word('проникайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проникаться.name.text, проникаться);

export { проникаться };