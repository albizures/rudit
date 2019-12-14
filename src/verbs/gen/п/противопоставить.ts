import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противопоставить: PerfectVerb = {
  name: Word('противопоставить', 11),
  singular1stPerson: Word('противопоставлю', 11),
  singular2ndPerson: Word('противопоставишь', 11),
  singular3rdPerson: Word('противопоставит', 11),
  plural1stPerson: Word('противопоставим', 11),
  plural2ndPerson: Word('противопоставите', 11),
  plural3rdPerson: Word('противопоставят', 11),
  masculinePast: Word('противопоставил', 11),
  femininePast: Word('противопоставила', 11),
  neuterPast: Word('противопоставило', 11),
  pluralPast: Word('противопоставили', 11),
  imperativeInformal: Word('противопоставь', 11),
  imperativeFormal: Word('противопоставьте', 11),
  imperfect: ['противопоставлять'],
};

perfectVerbs.set(противопоставить.name.text, противопоставить);

export { противопоставить };