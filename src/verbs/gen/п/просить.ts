import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просить: PerfectVerb = {
  name: Word('просить', 4),
  singular1stPerson: Word('прошу', 4),
  singular2ndPerson: Word('просишь', 2),
  singular3rdPerson: Word('просит', 2),
  plural1stPerson: Word('просим', 2),
  plural2ndPerson: Word('просите', 2),
  plural3rdPerson: Word('просят', 2),
  masculinePast: Word('просил', 4),
  femininePast: Word('просила', 4),
  neuterPast: Word('просило', 4),
  pluralPast: Word('просили', 4),
  imperativeInformal: Word('проси', 4),
  imperativeFormal: Word('просите', 4),
  imperfect: ['попросить'],
};

perfectVerbs.set(просить.name.text, просить);

export { просить };