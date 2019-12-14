import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагибаться: PerfectVerb = {
  name: Word('нагибаться', 5),
  singular1stPerson: Word('нагибаюсь', 5),
  singular2ndPerson: Word('нагибаешься', 5),
  singular3rdPerson: Word('нагибается', 5),
  plural1stPerson: Word('нагибаемся', 5),
  plural2ndPerson: Word('нагибаетесь', 5),
  plural3rdPerson: Word('нагибаются', 5),
  masculinePast: Word('нагибался', 5),
  femininePast: Word('нагибалась', 5),
  neuterPast: Word('нагибалось', 5),
  pluralPast: Word('нагибались', 5),
  imperativeInformal: Word('нагибайся', 5),
  imperativeFormal: Word('нагибайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нагибаться.name.text, нагибаться);

export { нагибаться };