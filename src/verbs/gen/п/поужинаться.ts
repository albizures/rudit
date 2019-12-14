import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поужинаться: PerfectVerb = {
  name: Word('поужинаться', 2),
  singular1stPerson: Word('поужинаюсь', 2),
  singular2ndPerson: Word('поужинаешься', 2),
  singular3rdPerson: Word('поужинается', 2),
  plural1stPerson: Word('поужинаемся', 2),
  plural2ndPerson: Word('поужинаетесь', 2),
  plural3rdPerson: Word('поужинаются', 2),
  masculinePast: Word('поужинался', 2),
  femininePast: Word('поужиналась', 2),
  neuterPast: Word('поужиналось', 2),
  pluralPast: Word('поужинались', 2),
  imperativeInformal: Word('поужинайся', 2),
  imperativeFormal: Word('поужинайтесь', 2),
  imperfect: ['ужинать'],
};

perfectVerbs.set(поужинаться.name.text, поужинаться);

export { поужинаться };