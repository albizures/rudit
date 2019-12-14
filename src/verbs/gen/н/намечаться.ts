import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намечаться: PerfectVerb = {
  name: Word('намечаться', 5),
  singular1stPerson: Word('намечаюсь', 5),
  singular2ndPerson: Word('намечаешься', 5),
  singular3rdPerson: Word('намечается', 5),
  plural1stPerson: Word('намечаемся', 5),
  plural2ndPerson: Word('намечаетесь', 5),
  plural3rdPerson: Word('намечаются', 5),
  masculinePast: Word('намечался', 5),
  femininePast: Word('намечалась', 5),
  neuterPast: Word('намечалось', 5),
  pluralPast: Word('намечались', 5),
  imperativeInformal: Word('намечайся', 5),
  imperativeFormal: Word('намечайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(намечаться.name.text, намечаться);

export { намечаться };