import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогреваться: PerfectVerb = {
  name: Word('разогреваться', 8),
  singular1stPerson: Word('разогреваюсь', 8),
  singular2ndPerson: Word('разогреваешься', 8),
  singular3rdPerson: Word('разогревается', 8),
  plural1stPerson: Word('разогреваемся', 8),
  plural2ndPerson: Word('разогреваетесь', 8),
  plural3rdPerson: Word('разогреваются', 8),
  masculinePast: Word('разогревался', 8),
  femininePast: Word('разогревалась', 8),
  neuterPast: Word('разогревалось', 8),
  pluralPast: Word('разогревались', 8),
  imperativeInformal: Word('разогревайся', 8),
  imperativeFormal: Word('разогревайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(разогреваться.name.text, разогреваться);

export { разогреваться };