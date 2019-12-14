import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очеловечить: PerfectVerb = {
  name: Word('очеловечить', 6),
  singular1stPerson: Word('очеловечу', 6),
  singular2ndPerson: Word('очеловечишь', 6),
  singular3rdPerson: Word('очеловечит', 6),
  plural1stPerson: Word('очеловечим', 6),
  plural2ndPerson: Word('очеловечите', 6),
  plural3rdPerson: Word('очеловечат', 6),
  masculinePast: Word('очеловечил', 6),
  femininePast: Word('очеловечила', 6),
  neuterPast: Word('очеловечило', 6),
  pluralPast: Word('очеловечили', 6),
  imperativeInformal: Word('очеловечь', 6),
  imperativeFormal: Word('очеловечьте', 6),
  imperfect: [],
};

perfectVerbs.set(очеловечить.name.text, очеловечить);

export { очеловечить };