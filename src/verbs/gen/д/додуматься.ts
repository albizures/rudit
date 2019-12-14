import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const додуматься: PerfectVerb = {
  name: Word('додуматься', 3),
  singular1stPerson: Word('додумаюсь', 3),
  singular2ndPerson: Word('додумаешься', 3),
  singular3rdPerson: Word('додумается', 3),
  plural1stPerson: Word('додумаемся', 3),
  plural2ndPerson: Word('додумаетесь', 3),
  plural3rdPerson: Word('додумаются', 3),
  masculinePast: Word('додумался', 3),
  femininePast: Word('додумалась', 3),
  neuterPast: Word('додумалось', 3),
  pluralPast: Word('додумались', 3),
  imperativeInformal: Word('додумайся', 3),
  imperativeFormal: Word('додумайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(додуматься.name.text, додуматься);

export { додуматься };