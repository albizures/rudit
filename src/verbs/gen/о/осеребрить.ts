import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осеребрить: PerfectVerb = {
  name: Word('осеребрить', 7),
  singular1stPerson: Word('осеребрю', 7),
  singular2ndPerson: Word('осеребришь', 7),
  singular3rdPerson: Word('осеребрит', 7),
  plural1stPerson: Word('осеребрим', 7),
  plural2ndPerson: Word('осеребрите', 7),
  plural3rdPerson: Word('осеребрят', 7),
  masculinePast: Word('осеребрил', 7),
  femininePast: Word('осеребрила', 7),
  neuterPast: Word('осеребрило', 7),
  pluralPast: Word('осеребрили', 7),
  imperativeInformal: Word('осеребри', 7),
  imperativeFormal: Word('осеребрите', 7),
  imperfect: [],
};

perfectVerbs.set(осеребрить.name.text, осеребрить);

export { осеребрить };