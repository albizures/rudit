import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трогаться: PerfectVerb = {
  name: Word('трогаться', 2),
  singular1stPerson: Word('трогаюсь', 2),
  singular2ndPerson: Word('трогаешься', 2),
  singular3rdPerson: Word('трогается', 2),
  plural1stPerson: Word('трогаемся', 2),
  plural2ndPerson: Word('трогаетесь', 2),
  plural3rdPerson: Word('трогаются', 2),
  masculinePast: Word('трогался', 2),
  femininePast: Word('трогалась', 2),
  neuterPast: Word('трогалось', 2),
  pluralPast: Word('трогались', 2),
  imperativeInformal: Word('трогайся', 2),
  imperativeFormal: Word('трогайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(трогаться.name.text, трогаться);

export { трогаться };