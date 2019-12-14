import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const царить: PerfectVerb = {
  name: Word('царить', 3),
  singular1stPerson: Word('царю', 3),
  singular2ndPerson: Word('царишь', 3),
  singular3rdPerson: Word('царит', 3),
  plural1stPerson: Word('царим', 3),
  plural2ndPerson: Word('царите', 3),
  plural3rdPerson: Word('царят', 3),
  masculinePast: Word('царил', 3),
  femininePast: Word('царила', 3),
  neuterPast: Word('царило', 3),
  pluralPast: Word('царили', 3),
  imperativeInformal: Word('цари', 3),
  imperativeFormal: Word('царите', 3),
  imperfect: [],
};

perfectVerbs.set(царить.name.text, царить);

export { царить };