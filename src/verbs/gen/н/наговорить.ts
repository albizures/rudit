import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наговорить: PerfectVerb = {
  name: Word('наговорить', 7),
  singular1stPerson: Word('наговорю', 7),
  singular2ndPerson: Word('наговоришь', 7),
  singular3rdPerson: Word('наговорит', 7),
  plural1stPerson: Word('наговорим', 7),
  plural2ndPerson: Word('наговорите', 7),
  plural3rdPerson: Word('наговорят', 7),
  masculinePast: Word('наговорил', 7),
  femininePast: Word('наговорила', 7),
  neuterPast: Word('наговорило', 7),
  pluralPast: Word('наговорили', 7),
  imperativeInformal: Word('наговори', 7),
  imperativeFormal: Word('наговорите', 7),
  imperfect: [],
};

perfectVerbs.set(наговорить.name.text, наговорить);

export { наговорить };