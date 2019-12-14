import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморозить: PerfectVerb = {
  name: Word('сморозить', 4),
  singular1stPerson: Word('сморожу', 4),
  singular2ndPerson: Word('сморозишь', 4),
  singular3rdPerson: Word('сморозит', 4),
  plural1stPerson: Word('сморозим', 4),
  plural2ndPerson: Word('сморозите', 4),
  plural3rdPerson: Word('сморозят', 4),
  masculinePast: Word('сморозил', 4),
  femininePast: Word('сморозила', 4),
  neuterPast: Word('сморозило', 4),
  pluralPast: Word('сморозили', 4),
  imperativeInformal: Word('сморозь', 4),
  imperativeFormal: Word('сморозьте', 4),
  imperfect: [],
};

perfectVerbs.set(сморозить.name.text, сморозить);

export { сморозить };