import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбуяниться: PerfectVerb = {
  name: Word('разбуяниться', 5),
  singular1stPerson: Word('разбуянюсь', 5),
  singular2ndPerson: Word('разбуянишься', 5),
  singular3rdPerson: Word('разбуянится', 5),
  plural1stPerson: Word('разбуянимся', 5),
  plural2ndPerson: Word('разбуянитесь', 5),
  plural3rdPerson: Word('разбуянятся', 5),
  masculinePast: Word('разбуянился', 5),
  femininePast: Word('разбуянилась', 5),
  neuterPast: Word('разбуянилось', 5),
  pluralPast: Word('разбуянились', 5),
  imperativeInformal: Word('разбуянься', 5),
  imperativeFormal: Word('разбуяньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разбуяниться.name.text, разбуяниться);

export { разбуяниться };