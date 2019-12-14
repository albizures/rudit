import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высадить: PerfectVerb = {
  name: Word('высадить', 1),
  singular1stPerson: Word('высажу', 1),
  singular2ndPerson: Word('высадишь', 1),
  singular3rdPerson: Word('высадит', 1),
  plural1stPerson: Word('высадим', 1),
  plural2ndPerson: Word('высадите', 1),
  plural3rdPerson: Word('высадят', 1),
  masculinePast: Word('высадил', 1),
  femininePast: Word('высадила', 1),
  neuterPast: Word('высадило', 1),
  pluralPast: Word('высадили', 1),
  imperativeInformal: Word('высади', 1),
  imperativeFormal: Word('высадите', 1),
  imperfect: [],
};

perfectVerbs.set(высадить.name.text, высадить);

export { высадить };