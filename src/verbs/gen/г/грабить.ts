import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грабить: PerfectVerb = {
  name: Word('грабить', 2),
  singular1stPerson: Word('граблю', 2),
  singular2ndPerson: Word('грабишь', 2),
  singular3rdPerson: Word('грабит', 2),
  plural1stPerson: Word('грабим', 2),
  plural2ndPerson: Word('грабите', 2),
  plural3rdPerson: Word('грабят', 2),
  masculinePast: Word('грабил', 2),
  femininePast: Word('грабила', 2),
  neuterPast: Word('грабило', 2),
  pluralPast: Word('грабили', 2),
  imperativeInformal: Word('грабь', 2),
  imperativeFormal: Word('грабьте', 2),
  imperfect: ['ограбить'],
};

perfectVerbs.set(грабить.name.text, грабить);

export { грабить };