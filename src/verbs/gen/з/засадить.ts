import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засадить: PerfectVerb = {
  name: Word('засадить', 5),
  singular1stPerson: Word('засажу', 5),
  singular2ndPerson: Word('засадишь', 3),
  singular3rdPerson: Word('засадит', 3),
  plural1stPerson: Word('засадим', 3),
  plural2ndPerson: Word('засадите', 3),
  plural3rdPerson: Word('засадят', 3),
  masculinePast: Word('засадил', 5),
  femininePast: Word('засадила', 5),
  neuterPast: Word('засадило', 5),
  pluralPast: Word('засадили', 5),
  imperativeInformal: Word('засади', 5),
  imperativeFormal: Word('засадите', 5),
  imperfect: [],
};

perfectVerbs.set(засадить.name.text, засадить);

export { засадить };