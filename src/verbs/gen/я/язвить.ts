import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const язвить: PerfectVerb = {
  name: Word('язвить', 3),
  singular1stPerson: Word('язвлю', 4),
  singular2ndPerson: Word('язвишь', 3),
  singular3rdPerson: Word('язвит', 3),
  plural1stPerson: Word('язвим', 3),
  plural2ndPerson: Word('язвите', 3),
  plural3rdPerson: Word('язвят', 3),
  masculinePast: Word('язвил', 3),
  femininePast: Word('язвила', 3),
  neuterPast: Word('язвило', 3),
  pluralPast: Word('язвили', 3),
  imperativeInformal: Word('язви', 3),
  imperativeFormal: Word('язвите', 3),
  imperfect: ['съязвить'],
};

perfectVerbs.set(язвить.name.text, язвить);

export { язвить };