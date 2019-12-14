import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылощить: PerfectVerb = {
  name: Word('вылощить', 1),
  singular1stPerson: Word('вылощу', 1),
  singular2ndPerson: Word('вылощишь', 1),
  singular3rdPerson: Word('вылощит', 1),
  plural1stPerson: Word('вылощим', 1),
  plural2ndPerson: Word('вылощите', 1),
  plural3rdPerson: Word('вылощат', 1),
  masculinePast: Word('вылощил', 1),
  femininePast: Word('вылощила', 1),
  neuterPast: Word('вылощило', 1),
  pluralPast: Word('вылощили', 1),
  imperativeInformal: Word('вылощи', 1),
  imperativeFormal: Word('вылощите', 1),
  imperfect: [],
};

perfectVerbs.set(вылощить.name.text, вылощить);

export { вылощить };