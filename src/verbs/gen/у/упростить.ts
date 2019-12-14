import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упростить: PerfectVerb = {
  name: Word('упростить', 6),
  singular1stPerson: Word('упрощу', 5),
  singular2ndPerson: Word('упростишь', 6),
  singular3rdPerson: Word('упростит', 6),
  plural1stPerson: Word('упростим', 6),
  plural2ndPerson: Word('упростите', 6),
  plural3rdPerson: Word('упростят', 6),
  masculinePast: Word('упростил', 6),
  femininePast: Word('упростила', 6),
  neuterPast: Word('упростило', 6),
  pluralPast: Word('упростили', 6),
  imperativeInformal: Word('упрости', 6),
  imperativeFormal: Word('упростите', 6),
  imperfect: [],
};

perfectVerbs.set(упростить.name.text, упростить);

export { упростить };