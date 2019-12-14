import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протопить: PerfectVerb = {
  name: Word('протопить', 6),
  singular1stPerson: Word('протоплю', 7),
  singular2ndPerson: Word('протопишь', 4),
  singular3rdPerson: Word('протопит', 4),
  plural1stPerson: Word('протопим', 4),
  plural2ndPerson: Word('протопите', 4),
  plural3rdPerson: Word('протопят', 4),
  masculinePast: Word('протопил', 6),
  femininePast: Word('протопила', 6),
  neuterPast: Word('протопило', 6),
  pluralPast: Word('протопили', 6),
  imperativeInformal: Word('протопи', 6),
  imperativeFormal: Word('протопите', 6),
  imperfect: [],
};

perfectVerbs.set(протопить.name.text, протопить);

export { протопить };