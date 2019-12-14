import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стростить: PerfectVerb = {
  name: Word('стростить', 6),
  singular1stPerson: Word('строщу', 5),
  singular2ndPerson: Word('стростишь', 6),
  singular3rdPerson: Word('стростит', 6),
  plural1stPerson: Word('стростим', 6),
  plural2ndPerson: Word('стростите', 6),
  plural3rdPerson: Word('стростят', 6),
  masculinePast: Word('стростил', 6),
  femininePast: Word('стростила', 6),
  neuterPast: Word('стростило', 6),
  pluralPast: Word('стростили', 6),
  imperativeInformal: Word('стрости', 6),
  imperativeFormal: Word('стростите', 6),
  imperfect: [],
};

perfectVerbs.set(стростить.name.text, стростить);

export { стростить };