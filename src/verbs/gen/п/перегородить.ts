import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегородить: PerfectVerb = {
  name: Word('перегородить', 9),
  singular1stPerson: Word('перегорожу', 9),
  singular2ndPerson: Word('перегородишь', 7),
  singular3rdPerson: Word('перегородит', 7),
  plural1stPerson: Word('перегородим', 7),
  plural2ndPerson: Word('перегородите', 7),
  plural3rdPerson: Word('перегородят', 7),
  masculinePast: Word('перегородил', 9),
  femininePast: Word('перегородила', 9),
  neuterPast: Word('перегородило', 9),
  pluralPast: Word('перегородили', 9),
  imperativeInformal: Word('перегороди', 9),
  imperativeFormal: Word('перегородите', 9),
  imperfect: [],
};

perfectVerbs.set(перегородить.name.text, перегородить);

export { перегородить };