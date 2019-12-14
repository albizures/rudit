import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наварить: PerfectVerb = {
  name: Word('наварить', 5),
  singular1stPerson: Word('наварю', 5),
  singular2ndPerson: Word('наваришь', 3),
  singular3rdPerson: Word('наварит', 3),
  plural1stPerson: Word('наварим', 3),
  plural2ndPerson: Word('наварите', 3),
  plural3rdPerson: Word('наварят', 3),
  masculinePast: Word('наварил', 5),
  femininePast: Word('наварила', 5),
  neuterPast: Word('наварило', 5),
  pluralPast: Word('наварили', 5),
  imperativeInformal: Word('навари', 5),
  imperativeFormal: Word('наварите', 5),
  imperfect: [],
};

perfectVerbs.set(наварить.name.text, наварить);

export { наварить };