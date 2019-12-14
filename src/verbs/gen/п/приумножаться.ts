import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приумножаться: PerfectVerb = {
  name: Word('приумножаться', 8),
  singular1stPerson: Word('приумножаюсь', 8),
  singular2ndPerson: Word('приумножаешься', 8),
  singular3rdPerson: Word('приумножается', 8),
  plural1stPerson: Word('приумножаемся', 8),
  plural2ndPerson: Word('приумножаетесь', 8),
  plural3rdPerson: Word('приумножаются', 8),
  masculinePast: Word('приумножался', 8),
  femininePast: Word('приумножалась', 8),
  neuterPast: Word('приумножалось', 8),
  pluralPast: Word('приумножались', 8),
  imperativeInformal: Word('приумножайся', 8),
  imperativeFormal: Word('приумножайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(приумножаться.name.text, приумножаться);

export { приумножаться };