import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проморить: PerfectVerb = {
  name: Word('проморить', 6),
  singular1stPerson: Word('проморю', 6),
  singular2ndPerson: Word('проморишь', 6),
  singular3rdPerson: Word('проморит', 6),
  plural1stPerson: Word('проморим', 6),
  plural2ndPerson: Word('проморите', 6),
  plural3rdPerson: Word('проморят', 6),
  masculinePast: Word('проморил', 6),
  femininePast: Word('проморила', 6),
  neuterPast: Word('проморило', 6),
  pluralPast: Word('проморили', 6),
  imperativeInformal: Word('промори', 6),
  imperativeFormal: Word('проморите', 6),
  imperfect: [],
};

perfectVerbs.set(проморить.name.text, проморить);

export { проморить };