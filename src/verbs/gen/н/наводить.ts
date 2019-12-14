import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наводить: PerfectVerb = {
  name: Word('наводить', 5),
  singular1stPerson: Word('навожу', 5),
  singular2ndPerson: Word('наводишь', 5),
  singular3rdPerson: Word('наводит', 5),
  plural1stPerson: Word('наводим', 5),
  plural2ndPerson: Word('наводите', 5),
  plural3rdPerson: Word('наводят', 5),
  masculinePast: Word('наводил', 5),
  femininePast: Word('наводила', 5),
  neuterPast: Word('наводило', 5),
  pluralPast: Word('наводили', 5),
  imperativeInformal: Word('наводи', 5),
  imperativeFormal: Word('наводите', 5),
  imperfect: ['навести'],
};

perfectVerbs.set(наводить.name.text, наводить);

export { наводить };