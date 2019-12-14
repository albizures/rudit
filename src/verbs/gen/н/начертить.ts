import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начертить: PerfectVerb = {
  name: Word('начертить', 6),
  singular1stPerson: Word('начерчу', 6),
  singular2ndPerson: Word('начертишь', 3),
  singular3rdPerson: Word('начертит', 3),
  plural1stPerson: Word('начертим', 3),
  plural2ndPerson: Word('начертите', 3),
  plural3rdPerson: Word('начертят', 3),
  masculinePast: Word('начертил', 6),
  femininePast: Word('начертила', 6),
  neuterPast: Word('начертило', 6),
  pluralPast: Word('начертили', 6),
  imperativeInformal: Word('начерти', 6),
  imperativeFormal: Word('начертите', 6),
  imperfect: [],
};

perfectVerbs.set(начертить.name.text, начертить);

export { начертить };