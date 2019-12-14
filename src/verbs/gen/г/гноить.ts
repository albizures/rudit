import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гноить: PerfectVerb = {
  name: Word('гноить', 3),
  singular1stPerson: Word('гною', 3),
  singular2ndPerson: Word('гноишь', 3),
  singular3rdPerson: Word('гноит', 3),
  plural1stPerson: Word('гноим', 3),
  plural2ndPerson: Word('гноите', 3),
  plural3rdPerson: Word('гноят', 3),
  masculinePast: Word('гноил', 3),
  femininePast: Word('гноила', 3),
  neuterPast: Word('гноило', 3),
  pluralPast: Word('гноили', 3),
  imperativeInformal: Word('гнои', 3),
  imperativeFormal: Word('гноите', 3),
  imperfect: [],
};

perfectVerbs.set(гноить.name.text, гноить);

export { гноить };