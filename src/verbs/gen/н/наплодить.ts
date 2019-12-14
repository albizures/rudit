import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплодить: PerfectVerb = {
  name: Word('наплодить', 6),
  singular1stPerson: Word('напложу', 6),
  singular2ndPerson: Word('наплодишь', 6),
  singular3rdPerson: Word('наплодит', 6),
  plural1stPerson: Word('наплодим', 6),
  plural2ndPerson: Word('наплодите', 6),
  plural3rdPerson: Word('наплодят', 6),
  masculinePast: Word('наплодил', 6),
  femininePast: Word('наплодила', 6),
  neuterPast: Word('наплодило', 6),
  pluralPast: Word('наплодили', 6),
  imperativeInformal: Word('наплоди', 6),
  imperativeFormal: Word('наплодите', 6),
  imperfect: [],
};

perfectVerbs.set(наплодить.name.text, наплодить);

export { наплодить };