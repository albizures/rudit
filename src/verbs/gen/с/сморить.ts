import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморить: PerfectVerb = {
  name: Word('сморить', 4),
  singular1stPerson: Word('сморю', 4),
  singular2ndPerson: Word('сморишь', 4),
  singular3rdPerson: Word('сморит', 4),
  plural1stPerson: Word('сморим', 4),
  plural2ndPerson: Word('сморите', 4),
  plural3rdPerson: Word('сморят', 4),
  masculinePast: Word('сморил', 4),
  femininePast: Word('сморила', 4),
  neuterPast: Word('сморило', 4),
  pluralPast: Word('сморили', 4),
  imperativeInformal: Word('смори', 4),
  imperativeFormal: Word('сморите', 4),
  imperfect: [],
};

perfectVerbs.set(сморить.name.text, сморить);

export { сморить };