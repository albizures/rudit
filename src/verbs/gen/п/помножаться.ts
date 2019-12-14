import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помножаться: PerfectVerb = {
  name: Word('помножаться', 6),
  singular1stPerson: Word('помножаюсь', 6),
  singular2ndPerson: Word('помножаешься', 6),
  singular3rdPerson: Word('помножается', 6),
  plural1stPerson: Word('помножаемся', 6),
  plural2ndPerson: Word('помножаетесь', 6),
  plural3rdPerson: Word('помножаются', 6),
  masculinePast: Word('помножался', 6),
  femininePast: Word('помножалась', 6),
  neuterPast: Word('помножалось', 6),
  pluralPast: Word('помножались', 6),
  imperativeInformal: Word('помножайся', 6),
  imperativeFormal: Word('помножайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(помножаться.name.text, помножаться);

export { помножаться };